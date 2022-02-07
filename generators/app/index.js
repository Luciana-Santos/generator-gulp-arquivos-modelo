const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	welcome() {
		this.log('Bem vindo ao gerador de arquivos base e compilador de sass.');
	}

	writing() {
		this.fs.copy(
			this.templatePath('index.html'),
			this.destinationPath('index.html')
		);
		this.fs.copy(
			this.templatePath('gulpfile.js'),
			this.destinationPath('gulpfile.js')
		);
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		);
		this.fs.copy(
			this.templatePath('package.json'),
			this.destinationPath('package.json')
		);
		this.fs.copy(
			this.templatePath('package-lock.json'),
			this.destinationPath('package-lock.json')
		);
		this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
	}

	end() {
		this.log(' ');
		this.log(
			'Sucesso! Antes de executar, certifique-se de ter o Gulp CLI -g instalado, e não apenas o Gulp -g.'
		);
		this.log(' ');
		this.log("Mais informações:");
		this.log('https://coder-coder.com/install-gulp-globally-on-windows/');
		this.log(' ');
		this.log(
			"Apos instalar o Gulp CLI -g, já será possivel executar o comando 'gulp' no diretorio do projeto para iniciar o Gulp!"
		);
		this.log(' ');
	}
};