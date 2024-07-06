import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	BalloonEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	BlockToolbar,
	Bold,
	CKBox,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	PictureEditing,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Title,
	TodoList,
	Underline,
	Undo,
  HeadingOption,
  EditorConfig,
  ClassicEditor
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import './TextEditorStyle.css';

/**
 * Please update the following values with your actual tokens.
 * Instructions on how to obtain them: https://ckeditor.com/docs/trial/latest/guides/real-time/quick-start.html
 */
const CKBOX_TOKEN_URL = '<YOUR_CKBOX_TOKEN_URL>';

const TextEditor = () => {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'findAndReplace',
				'selectAll',
				'|',
				'heading',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'subscript',
				'superscript',
				'code',
				'|',
				'specialCharacters',
				'horizontalLine',
				'link',
				'insertImage',
				'ckbox',
				'mediaEmbed',
				'insertTable',
				'highlight',
				'blockQuote',
				'codeBlock',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'indent',
				'outdent',
				'|',
				'accessibilityHelp'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Alignment,
			Autoformat,
			AutoImage,
			AutoLink,
			Autosave,
			BlockQuote,
			BlockToolbar,
			Bold,
			CKBox,
			CloudServices,
			Code,
			CodeBlock,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			Heading,
			Highlight,
			HorizontalLine,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			Markdown,
			MediaEmbed,
			Paragraph,
			PasteFromMarkdownExperimental,
			PasteFromOffice,
			PictureEditing,
			SelectAll,
			SpecialCharacters,
			SpecialCharactersArrows,
			SpecialCharactersCurrency,
			SpecialCharactersEssentials,
			SpecialCharactersLatin,
			SpecialCharactersMathematical,
			SpecialCharactersText,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Title,
			TodoList,
			Underline,
			Undo
		],
		blockToolbar: [
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'|',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent'
		],
		// ckbox: {
		// 	tokenUrl: CKBOX_TOKEN_URL
		// },
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true
		},
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			] as HeadingOption[]
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'resizeImage'
			]
		},
		initialData: '',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: "manual" as string,
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		}
	};

	return (
		<div>
			<div className="main-container">
				<div className="editor-container editor-container_balloon-editor editor-container_include-block-toolbar" ref={editorContainerRef}>
					<div className="editor-container__editor">
						<div ref={editorRef}>
              {isLayoutReady && 
              <CKEditor
                editor={ ClassicEditor }
                config={ editorConfig as EditorConfig }
              />}
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TextEditor;
