function pesquisar()
{
    // Seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // String vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for(let dado of dados)
    {
        // Cria um novo elelento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
             <h2>
               <a href="#" target="_blank">${dado.titulo}</a>
             </h2>
               <p class="descricao-meta">${dado.descricao}</p>
               <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
     
     
     ` 
    }
    
    // Atribui os resultados gerados a seção HTML
    section.innerHTML = resultados;
}



