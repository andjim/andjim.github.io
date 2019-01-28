/*
    english= {'skill-anchor-text':'Skills',
     'skill-anchor-text':'Contact' }

    spanish= {'skill-anchor-text':'Habilidades',
     'skill-anchor-text':'Contacto' }

    langs{'en-US':english,
          'es-LA': spanish }

    Translator.translate('en-US',htmlNodes)
          */

class Translator {
    private langs: object;
    constructor(langs:object) {
        this.langs = langs;
    }
    /**
     * translate
lang:string, elements     */
    public translate(lang:string, elements: HTMLCollection) {
        let language = this.langs[lang];
        console.log(lang);
        for (let el in elements){
            elements[el].textContent = language[elements[el].id];
        }
    }
}

let english = {'skill-anchor-text':'Skills',
              'contact-anchor-text':'Contact',
              'title-text':'Anderson Jimenez',
              'subtitle-text':'Software Engeniering student and Web Developer',
              'skill-section-title-text':'Skills',
              'webdesign-text':'Web Design',
              'js-text':'Javascript',
              'python-text':'Python',
              'contact':'About me',
              'about-me-text':`Systems Engineering student at the Universidad O & M Dominicana.
              I am passionate about web development, being the way I start in the world of programming.
              Apart from my university studies, I also serve as my own teacher, being self-taught, so
              It's like I've learned about Programming, Web Development and Design, trying to acquire good practices
              to deliver a quality product.`,
              'second-contact-text':'Contact',
              'fb-link-text':'Anderson Jimenez',
              'email-text':'Andjim2598@gmail.com'
 };

 let spanish = {'skill-anchor-text':'Habilidades',
              'contact-anchor-text':'Contacto',
              'title-text':'Anderson Jimenez',
              'subtitle-text':'Estudiante de Ingeniería de sistemas y desarrollador web',
              'skill-section-title-text':'Habilidades',
              'webdesign-text':'Diseño web',
              'js-text':'Javascript',
              'python-text':'Python',
              'contact':'Sobre mi',
              'about-me-text':`Estudiante de Ingeniería de sistemas en la Universidad Dominicana O&M. 
              Soy apasionado por el desarrollo web, siendo la forma en que me inicie en el mundo de la programación. 
              Aparte de mis estudios universitarios, tambien funjo como mi propio profesor, siendo autodidacta, asi 
              es como he aprendido sobre Programacion, Desarrollo Web y Diseño, poniendo empeño en adquirir las buenas practicas
              para entregar un producto de calidad.`,
              'second-contact-text':'Contacto',
              'fb-link-text':'Anderson Jimenez',
              'email-text':'Andjim2598@gmail.com'
 };

 let french = {'skill-anchor-text':'Les compétences',
              'contact-anchor-text':'Contact',
              'title-text':'Anderson Jimenez',
              'subtitle-text':'Étudiant en ingénierie des systèmes et développeur web',
              'skill-section-title-text':'Les compétences',
              'webdesign-text':'Web Design',
              'js-text':'Javascript',
              'python-text':'Python',
              'contact':'Sur moi',
              'about-me-text':`Étudiant en génie des systèmes à l'Université O & M Dominicana.
              Je suis passionné par le développement Web et par ce que je commence dans le monde de la programmation.
              En plus de mes études universitaires, je suis aussi mon propre professeur, étant autodidacte, donc
              C'est comme si j'avais appris sur la programmation, le développement Web et la conception, en essayant d'acquérir de bonnes pratiques
              livrer un produit de qualité.`,
              'second-contact-text':'Contact',
              'fb-link-text':'Anderson Jimenez',
              'email-text':'Andjim2598@gmail.com'
 };


let langs = {'en-US':english,
             'es-LA':spanish,
             'fr-EU':french};

 
let selector = (<HTMLSelectElement>document.getElementById("lang"));
let translator = new Translator(langs);

let changeListener = (e) => {
    e.preventDefault();
    console.log(e);
    let lang_selected = selector.selectedOptions[0].value;
    let text_node = document.getElementsByClassName("text-node");
    translator.translate(lang_selected, text_node);
}

selector.addEventListener("change",changeListener);
selector.dispatchEvent(new Event('change'));