        
        function sorteia() {

            return Math.round(Math.random() * 80);
            
        }

        
        function sorteiaNumerosQuina() {
            let quina = []
            let numero = 1


            while(numero <= 5) {

                let numeroAleatorio = sorteia()
                let achou = false
                
                
                if(numeroAleatorio !== 0 && numeroAleatorio <= 80) {

                   
                    for(posicao = 0; posicao < quina.length; posicao++) {

                        if(quina[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }
                   
                    if(achou == false) {

                        quina.push(numeroAleatorio)
                        numero++
                    }

                }

            }
            
            let resultQuina = quina;
            document.getElementById("inputgeneratedQuina").value = resultQuina;
        }