var config = exports;

config['PhoenixDemoSiteDistribution'] = {
	rootPath: '../../',
	environment: 'browser',
	extensions: [require('buster-amd')],
	autoRun: false,
	tests: [
		'Packages/Application/**/Tests/JavaScript/Unit/**/*.js'
	],
	libs: [
		'Packages/Application/**/Tests/JavaScript/require-configuration.js',
		'Packages/Application/TYPO3.TYPO3/Resources/Public/JavaScript/require.js'
	],
	resources: [
		'Web/_Resources/Static/Packages/TYPO3.TYPO3/**/*.js',
		'Packages/Application/**/Tests/JavaScript/Unit/**/*.js',
		'Web/_Resources/Static/Packages/TYPO3.T3CON.Test/**/*.js'
	],
	sources: []
};
