module.exports = {
  seleccionarSkills: (seleccionadas = [], opciones) => {


    const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node.js', 'Angular', 
      'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 
      'Django', 'Flask', 'Ruby', 'Ruby on Rails', 'SQL', 'Mysql', 'MongoDB', 'WordPress'];

      let html = '';

      skills.forEach(skill => {
        html += `
          <li ${seleccionadas.includes(skill) ? 'class="activo"' : ''}>${skill }</li>
        `;
      });


      return opciones.fn().html = html;
  },

  tipoContrato: (seleccionado, opciones) => {
    return opciones.fn(this).replace(new RegExp(`value="${seleccionado}"`), '$& selected="selected"');
  }
}