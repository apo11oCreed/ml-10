/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.removePlugins = 'exportpdf,iframe,flash,table,tableselection,tabletools,forms,image,liststyle,find,magicline,pagebreak,pastefromdocs,pastefromword,preview,showblocks,templates,wsc,div,print';

	config.toolbar = [
		{ name: 'document', items: [ 'Source'] },
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste','-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Scayt' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic','Underline' ] },
		{name: 'styles',items:['FontSize']},
		{name: 'colors',items:['TextColor','BGColor']}
	];
};
