function main(){    
    let vendasJson = lerJson('Data/Broken/broken_database_1.json');
    let marcasJson = lerJson('Data/Broken/broken_database_2.json');

    vendasJson.forEach((venda, index) => {
        venda.id = index+1;
        venda.nome = substituirLetra(venda.nome,'æ', 'a');
        venda.nome = substituirLetra(venda.nome,'ø', 'o');

        venda.vendas = parseFloat(venda.vendas);
    });

    marcasJson.forEach(marcaObj => {
        marcaObj.marca = substituirLetra(marcaObj.marca,'æ', 'a');
        marcaObj.marca = substituirLetra(marcaObj.marca,'ø', 'o');
    });

    salvarJson('vendas_database', vendasJson);
    salvarJson('marcas_database', marcasJson);
}



function substituirLetra(string, oldChar, newChar){
    return string.replace(new RegExp(oldChar, 'g'), newChar);
}

const fs = require('fs');

function lerJson(filePath){
    try{
        let objectJson = fs.readFileSync(filePath, 'utf-8');
        objectJson = JSON.parse(objectJson);
        
        return objectJson;
    }
    catch(err){
        console.error(err);
    }
    
}

function salvarJson(fileName, json){
    
    try{
        json = JSON.stringify(json, null, 2);
        fs.writeFileSync(`Data/${fileName}.json`, json, 'utf-8');
    }
    catch(err){
        console.error(err);
    }
}

main();
