export const dictionary = {
    ES: {
        subtitle: "Analista de Sistemas",
        about: "Sobre mí",
        skills: "Conocimientos",
        projects: "Proyectos",
        contact: "Contactame",
        techs: "Tecnologías"
    },
    EN: {
        subtitle: "Systems Analyst",
        about: "about",
        skills: "skills",
        projects: "Projects",
        contact: "Contact me",
        techs: "Technologies"
    }
};

export const exportDictionary = (lang, word) => {
    return dictionary[lang][word].toUpperCase();
};
