const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
    }

    method1() {
        this.log('method 1 just run');
    }

    method2() {
        this.log('method 2 just run');
    }

    // 初始化阶段
    initializing() {
        this.props = {};
    }

    // 接受用户输入阶段
    prompting() {
        this.appname = 'rsuite-app';
        this.description = 'rsuite app';
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'input',
            name: 'description',
            message: 'Your project description',
            default: this.description
        }, {
            type: 'input',
            name: 'author',
            message: 'author',
        }, {
            type: 'input',
            name: 'repo',
            message: 'Your project git repository',
            default: this.description
        }, {
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to create this project?'
        }]).then((answers) => {
            Object.assign(this.props, answers);
        });
    }

    // 保存配置信息和文件 如 .editorconfig
    configuring() {

    }

    // 非特定的功能函数名称
    default() {

    }

    // 生成项目目录结构的阶段
    writing() {
        let pkg = Object.assign({}, this.props)
        this.fs.copy(
            this.templatePath('./'),
            this.destinationPath('./')
        );
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                name: pkg.name,
                description: pkg.description,
                author: pkg.author,
                repo: pkg.repo
            }
        );
    }

    // 统一处理冲突，如要生成的文件已经存在是否覆盖等处理
    conflicts() {

    }

    // 安装依赖阶段 
    install() {
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false
        });
    }

    // 生成器即将结束
    end() {

    }
};