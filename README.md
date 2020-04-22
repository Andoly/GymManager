## GymManager
CRUD project for managing instructors and members academy, using HTML5, CSS, JavaScript and Node.

## :rocket: Technologies
- Node.js
<p>Utilizando NPM para gerenciar recursos JavaScript dentro do projeto</p>

<div class="highlight highlight-source-shell">
<pre>npm install</pre>
</div>


## :floppy_disk: Banco de dados e ferramentas da aplicacão
- PostgreSQL - Banco de dados relacional utilizado para construir e armazenar os dados
- Postbird - Utilizado para vizualizar e manipular bancos de dados Postgres.
<br>
<p>Para usar postgres no seu projeto NodeJS adicione a dependencia ao seu projeto</p>
<pre>
<code>npm install pg </code>
</pre>


<h4>
   <a id="user-content-ligar-o-postgres" class="anchor" aria-hidden="true" href="#ligar-o-postgres"></a>
   "Ligar o Postgres"
</h4>
<ol>
   <li>Abra o Powershell como administrador, e navegue até a pasta da instação</li>
</ol>
<div class="highlight highlight-source-shell">
   <pre><span class="pl-c1">cd</span> <span class="pl-s"><span class="pl-pds">"</span>C:\Program Files\PostgreSQL\12\bin<span class="pl-cce">\"</span></span></pre>
</div>
<ol start="2">
   <li>Inicie o postgres com o comando abaixo:</li>
</ol>
<div class="highlight highlight-source-shell">
   <pre>.<span class="pl-cce">\p</span>g_ctl.exe -D <span class="pl-s"><span class="pl-pds">"</span>C:\Program Files\PostgreSQL\12\data<span class="pl-pds">"</span></span> start</pre>
</div>
<p><strong>Desligar o Postgres</strong></p>
<p>Use o passo número 1 acima e digite o comando para desligar</p>
<div class="highlight highlight-source-shell">
   <pre>.<span class="pl-cce">\p</span>g_ctl.exe -D <span class="pl-s"><span class="pl-pds">"</span>C:\Program Files\PostgreSQL\12\data<span class="pl-pds">"</span></span> stop</pre>
</div>



## :clipboard: Licence
This project is under license from [MIT](https://github.com/Andoly/GymManager/blob/master/LICENSE). See the LICENSE file for more details.
