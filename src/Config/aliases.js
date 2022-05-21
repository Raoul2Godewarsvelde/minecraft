const aliases = (prefix = `src`) => ({
	'@root': `${prefix}/src`,
	'@public': `${prefix}/public`,
	'@components': `${prefix}/src/Components`,
	'@styles': `${prefix}/src/Styles`,
	'@pages': `${prefix}/src/Pages`,
	'@json': `${prefix}/src/Json`,
	'@hooks': `${prefix}/src/Hooks`,
	'@lib': `${prefix}/src/Lib`,
	'@config': `${prefix}/src/Config`,
	'@assets': `${prefix}/src/Assets`,
	'@utils': `${prefix}/src/Utils`,
	'@scene': `${prefix}/src/scene`
});

module.exports = aliases;
