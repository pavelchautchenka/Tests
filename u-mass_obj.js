const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'},
        showAgeAndLangs: function(){
            return `Мне ${this.age} и я владею языками: ${this.skills.languages.join(" ").toUpperCase()}`;


    }
};

function showExperience(plan) {

    return plan.skills.exp
}



function showProgrammingLangs(plan) {
    let progress = "";
    for (let key in plan.skills.programmingLangs){
        progress += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    }
    return progress.trim()+`\n`
}
