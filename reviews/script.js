nome = document.getElementById('name')
cargo = document.getElementById('cargo')
descricao = document.getElementById('descricao')
btnnext = document.getElementById('btn-next')
btnback = document.getElementById('btn-back')
random = document.getElementById('randombtn')


img = document.getElementById('image')

btnnext.addEventListener('click', proximo)
btnback.addEventListener('click', volta)
random.addEventListener('click', aleatorio)

const reviews = [{
    id:1,
    nome:'Gabe',
    job:'o líder',
    img:'./images/cat-1.jpg',
    text:'Um gato estudioso e esforçado, Gabe é viciado em jogos lógicos e em leitura! Um ótimo cara para se conversar apesar de um pouco intimidador devido seu complexo... Ele definitivamente é um ótimo amigo!'
},
{
    id:2,
    nome:'Ariel',
    job:'gerente de projetos',
    img:'./images/cat-2.jpg',
    text:'Um gato gamer e otaku, adora escutar música o dia todo e jogar. Compra vários jogos mas nunca zera nenhum! Segue o dilema "Jogo jogos estressantes pra desestressar" e está sempre estressado "sem motivo"... Ele é definitivamente um ótimo amigo.'
},
{
    id:3,
    nome:'BluRay',
    job:'Back-end',
    img:'./images/cat-3.jpg',
    text:'Um ótimo amigo, consegue conversar sobre praticamente qualquer coisa! Adora jogos, animes, filmes, séries...Enfim, apenas converse com ele... Só tome cuidado com o rumo da conversa pra não serem presos enquanto conversam em locais públicos!    '
},
{
    id:4,
    nome:'Veggie',
    job:'Game Designer',
    img:'./images/cat-4.jpg',
    text:'Para Veggie nada pode ser simples, tudo não apenas precisa mas deve ter uma história! Não se sabe de onde Veggie veio nem como entrou na empresa, Veggie apenas apareceu e todos aceitaram, é um mistério!    '
},
{
    id:5,
    nome:'Dean',
    job:'Sub-gerente',
    img:'./images/cat-5.jpg',
    text:'Costumava ser muito colado com Gabe porém achou uma gatinha e cê sabe como é né? Dean é um cara tranquilo e fácil de se conversar, apenas diga "Assassino do crédito" em sua frente e provavelmente você não conseguirá fugir...    '
},
{
    id:6,
    nome:'Maika',
    job:'Web-developer',
    img:'./images/cat-6.jpg',
    text:'Gosta de animes e jogos, frequentemente entediada e perdida no mundo da lua. Não consegue se descrever e nem se decidir no que colocar na própria biografia felina!     '
},
{
    id:7,
    nome:'Earth',
    job:'Designer',
    img:'./images/cat-7.jpg',
    text:'Namorada de Dean, gosta de animes e séries dos mais variados tipos. É viciada em oxigenio e água, diz que não vive sem, que absurdo! Ultimamente têm se envolvido no esquema de piramide de criar humanos... '
},
];

let current = 0


function pessoa(){
    actualPerson = reviews[current]
    nome.innerText = actualPerson.nome;
    descricao.innerText = actualPerson.text;
    cargo.innerText = actualPerson.job;
    img.style.backgroundImage = `url(${actualPerson.img})`
}    

function volta(){
    current--;
    if(current < 0){
        current = reviews.length - 1
    }
    pessoa()
}

function proximo(){
    current++;
    if(current > reviews.length - 1){
        current = 0
    }
    pessoa()
}
function aleatorio(){
    x = Math.floor(Math.random()*reviews.length)
    current = x;
    pessoa()
}