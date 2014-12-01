module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			default: {
				files: {
					'assets/style/style.css': 'assets/style/style.less'
				},
				options: {
					compress: true,
				}
			}
		},
		autoprefixer: {
			single_file: {
				options: {
				// Target-specific options go here.
				},
				src: 'assets/style/style.css',
				dest: 'assets/style/style.css'
			}
		},
		/*uglify: {
			options: {
				separator: ';',
			},
			basic: {
				files: {
					'assets/js/app.min.js': [
						'assets/js/app.js'
					]
				}
			}
		},*/
		watch: {
			less: {
				files: '**/**.less',
				tasks: ['less', 'autoprefixer'],
				options: {
					interrupt: false,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', [ 
		'less',
		'autoprefixer',
		//'uglify',
		'watch:less'
	]);
}