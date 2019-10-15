window.onload = function () {
    function addStates() {
        let uf = {
            'AC': 'Acre',
            'AL': 'Alagoas',
            'AP': 'Amapá',
            'AM': 'Amazonas',
            'BA': 'Bahia',
            'CE': 'Ceará',
            'DF': 'Distrito Federal',
            'ES': 'Espírito Santo',
            'GO': 'Goiás',
            'MA': 'Maranhão',
            'MT': 'Mato Grosso',
            'MS': 'Mato Grosso do Sul',
            'MG': 'Minas Gerais',
            'PA': 'Pará',
            'PB': 'Paraíba',
            'PR': 'Paraná',
            'PE': 'Pernambuco',
            'PI': 'Piauí',
            'RJ': 'Rio de Janeiro',
            'RN': 'Rio Grande do Norte',
            'RS': 'Rio Grande do Sul',
            'RO': 'Rondônia',
            'RR': 'Roraima',
            'SC': 'Santa Catarina',
            'SP': 'São Paulo',
            'SE': 'Sergipe',
            'TO': 'Tocantins'
        }

        for (let state in uf) {
            let element = document.createElement('option');
            element.value = uf[state];
            element.innerHTML = state;
            document.getElementById('uf').appendChild(element);
        }
    }
    addStates();
    
    function verificaData(digData) {	
        var bissexto = 0;
        var data = digData; 	
        var tam = data.length;	
        if (tam == 10) 	{		
            var dia = data.substr(0,2)		
            var mes = data.substr(3,2)		
            var ano = data.substr(6,4)		
            if ((ano > 1900)||(ano < 2100)){			
                switch (mes){				
                    case '01':				
                    case '03':				
                    case '05':				
                    case '07':				
                    case '08':				
                    case '10':				
                    case '12':					
                    if  (dia <= 31){						
                        return true;					
                    }break								
                    case '04':						
                    case '06':				
                    case '09':				
                    case '11':					
                    if  (dia <= 30){						
                        return true;					
                    }break				
                    case '02':										
                    if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)){ 						
                        bissexto = 1; 					
                    }if ((bissexto == 1) && (dia <= 29)){ 						
                        return true;
                    }if ((bissexto != 1) && (dia <= 28)){
                        return true; 					
                    }break									
                }		
            }	
        }alert("A Data "+data+" é inválida!");	return false;}

}
