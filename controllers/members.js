const fs = require('fs')
const data = require("../data.json")
const { date } = require('../utils')

exports.index = function(req, res){
    return res.render("members/index", { members : data.members })
}


exports.create = function(req, res){
    return res.render("members/create")
}

exports.post = function(req, res){

    //Validação antes de enviar ao banco de dados
    const keys  = Object.keys(req.body)
    for(key of keys){
        //key.body.key ==""
        if (req.body[key] ==""){
            return res.send("Please, fill all fields")
        }
    }
    //Desestruturando o objeto
    //let {avatar_url, birth, name, email, gender, blood, weight, height} = req.body

    //Transformação de data
    birth = Date.parse(req.body.birth)
    //Verificando se há ID cadastrado
    let id = 1
    const lastMember = data.members[data.members.length - 1]
    if (lastMember){
        id = lastMember.id + 1
    }

    //Adiciona um objeto ao array data
    data.members.push({
        ...req.body,
        id,
        birth 
    })

    //Envia para dentro do arquivo o data.json
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/members")
    })
    //Para visualizar no navegador o funcionamento do callback usar : return res.send(req.body)
}

exports.show = function(req, res){
    //req.params
    const { id } = req.params
    const foundMember = data.members.find(function(member){
        return member.id == id
    })
    if (!foundMember) return res.send("Member not found")

    //Correção de dados
    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay
    }
    
    //Renderiza e envia os dados
    return res.render("members/show", { member })
}

exports.edit = function(req, res){
    //req.params
    const { id } = req.params
    const foundMember = data.members.find(function(member){
        return id == member.id 
    })
    if (!foundMember) return res.send("Member not found")

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).iso
    }

    return res.render("members/edit", { member })
}

exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundMember = data.members.find(function(member, foundIndex){
        if(id == member.id){
            index = foundIndex
            return true
        }
    })
    if (!foundMember) return res.send("Member not found")

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }
    data.members[index] = member
    fs.writeFile("data.json",JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error")

        return res.redirect(`/members/${id}`)
    })
    
}

exports.delete = function(req, res){
    const { id } = req.body
    
    const filteredMembers = data.members.filter(function(member){
        return member.id != id
    })
    data.members = filteredMembers
    fs.writeFile("data.json",JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/members")
    })
}