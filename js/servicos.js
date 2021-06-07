handleChangeService = (serviceName) => {
    const image = document.getElementById('ikonoservicos');
    const text = document.getElementById('ikonoservicos-text');

    const services1 = document.getElementById('li_servicos1');
    const services2 = document.getElementById('li_servicos2');
    const services3 = document.getElementById('li_servicos3');
    const services4 = document.getElementById('li_servicos4');
    const services5 = document.getElementById('li_servicos5');
    const services6 = document.getElementById('li_servicos6');

    switch (serviceName) {
        case 'image1':
            image.src = './img/icon/servicos/Eficiencia.png';
            text.innerText = 'Consultoria especializada nas melhoras práticas de eficiência energética, garantindo otimização de sistemas de iluminação, climatização e envoltória.'
            services1.classList.add('active')
            services2.classList.remove('active')
            services3.classList.remove('active')
            services4.classList.remove('active')
            services5.classList.remove('active')
            services6.classList.remove('active')
            break;
        case 'image2':
            image.src = './img/icon/servicos/conforto.png'
            text.innerText = 'Análises dos principais parâmetros de sistemas e envoltória para garantir as melhores soluções de conforto térmico e lumínico e atendimento às normas NBR 15.575 e ASHRAE 55.'
            services1.classList.remove('active')
            services2.classList.add('active')
            services3.classList.remove('active')
            services4.classList.remove('active')
            services5.classList.remove('active')
            services6.classList.remove('active')
            break;
        case 'image3':
            image.src = './img/icon/servicos/Consultoria.png'
            text.innerText = 'Do início ao fim do projeto, auxiliamos em todo o processo, treinamentos, revisões, documentação e na interpretação das normas exigidas pelas certificações de sustentabilidade.'
            services1.classList.remove('active')
            services2.classList.remove('active')
            services3.classList.add('active')
            services4.classList.remove('active')
            services5.classList.remove('active')
            services6.classList.remove('active')
            break;
        case 'image4':
            image.src = './img/icon/servicos/clima.png'
            text.innerText = 'Projetos em BIM, contando com as melhores práticas da construção civil, como foco em eficiência, conforto e saúde do usuário.'
            services1.classList.remove('active')
            services2.classList.remove('active')
            services3.classList.remove('active')
            services4.classList.add('active')
            services5.classList.remove('active')
            services6.classList.remove('active')
            break;
        case 'image5':
            image.src = './img/icon/servicos/paisagismo.png'
            text.innerText = 'Seleção de espécies com foco na regeneração ambiental, recuperação de biomas nativos e neutralização do consumo de água.'
            services1.classList.remove('active')
            services2.classList.remove('active')
            services3.classList.remove('active')
            services4.classList.remove('active')
            services5.classList.add('active')
            services6.classList.remove('active')
            break;
        case 'image6':
            image.src = './img/icon/servicos/hidrica.png'
            text.innerText = 'Otimização de sistemas hidráulicos, com seleção de metais e louças eficientes, associadas às melhores práticas de captação, tratamento e reaproveitamentos de águas.'
            services1.classList.remove('active')
            services2.classList.remove('active')
            services3.classList.remove('active')
            services4.classList.remove('active')
            services5.classList.remove('active')
            services6.classList.add('active')
            break;
    }
}