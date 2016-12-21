module.exports = function(grunt) {
    /*grunt.loadNpmTasks('grunt-sass');*/

    require('load-grunt-tasks')(grunt);

    /*var config = grunt.file.readYAML('Gruntconfig.yml');*/

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 500,
                        suffix: '_small',
                        quality: 82
                    },  {
                        width: 800,
                        suffix: '_medium',
                        quality: 82
                        }]
                },
                    files: [{
                        expand: true,
                        src: ['portfolio/*.{gif,jpg,png}'],
                        cwd: 'images_src/',
                        dest: 'img/'
                    }]
                  }
        }
    });

    grunt.registerTask('default', ['responsive_images']);
};