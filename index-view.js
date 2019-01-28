/*
    english= {'skill-anchor-text':'Skills',
     'skill-anchor-text':'Contact' }

    spanish= {'skill-anchor-text':'Habilidades',
     'skill-anchor-text':'Contacto' }

    langs{'en-US':english,
          'es-LA': spanish }

    Translator.translate('en-US',htmlNodes)
          */
var Translator = /** @class */ (function () {
    function Translator(langs) {
        this.langs = langs;
    }
    /**
     * translate
lang:string, elements     */
    Translator.prototype.translate = function (lang, elements) {
        var language = this.langs[lang];
        console.log(lang);
        for (var el in elements) {
            elements[el].textContent = language[elements[el].id];
        }
    };
    return Translator;
}());
var english = { 'skill-anchor-text': 'Skills',
    'contact-anchor-text': 'Contact',
    'title-text': 'Anderson Jimenez',
    'subtitle-text': 'Software Engeniering student and Web Developer',
    'skill-section-title-text': 'Skills',
    'webdesign-text': 'Web Design',
    'js-text': 'Javascript',
    'python-text': 'Python',
    'contact': 'About me',
    'about-me-text': "Systems Engineering student at the Universidad O & M Dominicana.\n              I am passionate about web development, being the way I start in the world of programming.\n              Apart from my university studies, I also serve as my own teacher, being self-taught, so\n              It's like I've learned about Programming, Web Development and Design, trying to acquire good practices\n              to deliver a quality product.",
    'second-contact-text': 'Contact',
    'fb-link-text': 'Anderson Jimenez',
    'email-text': 'Andjim2598@gmail.com'
};
var spanish = { 'skill-anchor-text': 'Habilidades',
    'contact-anchor-text': 'Contacto',
    'title-text': 'Anderson Jimenez',
    'subtitle-text': 'Estudiante de Ingeniería de sistemas y desarrollador web',
    'skill-section-title-text': 'Habilidades',
    'webdesign-text': 'Diseño web',
    'js-text': 'Javascript',
    'python-text': 'Python',
    'contact': 'Sobre mi',
    'about-me-text': "Estudiante de Ingenier\u00EDa de sistemas en la Universidad Dominicana O&M. \n              Soy apasionado por el desarrollo web, siendo la forma en que me inicie en el mundo de la programaci\u00F3n. \n              Aparte de mis estudios universitarios, tambien funjo como mi propio profesor, siendo autodidacta, asi \n              es como he aprendido sobre Programacion, Desarrollo Web y Dise\u00F1o, poniendo empe\u00F1o en adquirir las buenas practicas\n              para entregar un producto de calidad.",
    'second-contact-text': 'Contacto',
    'fb-link-text': 'Anderson Jimenez',
    'email-text': 'Andjim2598@gmail.com'
};
var french = { 'skill-anchor-text': 'Les compétences',
    'contact-anchor-text': 'Contact',
    'title-text': 'Anderson Jimenez',
    'subtitle-text': 'Étudiant en ingénierie des systèmes et développeur web',
    'skill-section-title-text': 'Les compétences',
    'webdesign-text': 'Web Design',
    'js-text': 'Javascript',
    'python-text': 'Python',
    'contact': 'Sur moi',
    'about-me-text': "\u00C9tudiant en g\u00E9nie des syst\u00E8mes \u00E0 l'Universit\u00E9 O & M Dominicana.\n              Je suis passionn\u00E9 par le d\u00E9veloppement Web et par ce que je commence dans le monde de la programmation.\n              En plus de mes \u00E9tudes universitaires, je suis aussi mon propre professeur, \u00E9tant autodidacte, donc\n              C'est comme si j'avais appris sur la programmation, le d\u00E9veloppement Web et la conception, en essayant d'acqu\u00E9rir de bonnes pratiques\n              livrer un produit de qualit\u00E9.",
    'second-contact-text': 'Contact',
    'fb-link-text': 'Anderson Jimenez',
    'email-text': 'Andjim2598@gmail.com'
};
var langs = { 'en-US': english,
    'es-LA': spanish,
    'fr-EU': french };
var selector = document.getElementById("lang");
var translator = new Translator(langs);
var changeListener = function (e) {
    e.preventDefault();
    console.log(e);
    var lang_selected = selector.selectedOptions[0].value;
    var text_node = document.getElementsByClassName("text-node");
    translator.translate(lang_selected, text_node);
};
selector.addEventListener("change", changeListener);
