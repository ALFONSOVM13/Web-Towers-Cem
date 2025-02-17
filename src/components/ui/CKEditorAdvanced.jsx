'use client'
import { useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { ClassicEditor, Essentials, BlockQuote, Paragraph, Bold, Italic, Underline, Alignment, FontColor, FontBackgroundColor, Link, List, Image, ImageToolbar, ImageStyle, ImageResize, ImageCaption, Plugin, ButtonView, Heading, Indent, IndentBlock } from 'ckeditor5';
import { ImagesModal } from '@/components/images/ImagesModal';
import { ModalContainer } from '@/components/ui/ModalContainer';
import 'ckeditor5/ckeditor5.css';
import './CKEditorAdvanced.scss';


export class CustomImagePlugin extends Plugin {

  init() {
    const editor = this.editor;
    const openModal = this.editor.config.get('customImagePlugin.openModal');

    editor.handleAddImageToEditor = (imageUrl) => {
      editor.model.change(writer => {
        const imageElement = writer.createElement('imageBlock', {
          src: imageUrl
        });
        editor.model.insertContent(imageElement);
      });
    };

    editor.ui.componentFactory.add('insertImage', () => {

      const button = new ButtonView();
      button.set({
        label: 'Insert image',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path><path d="m8 11-3 4h11l-4-6-3 4z"></path><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>',
        tooltip: true,
        withText: false
      });

      button.on('execute', () => {
        openModal()
      });
      return button;
    });
  }
}

const customColors = [
  { color: '#2C2E63', label: 'Primario' },
  { color: '#42599d', label: 'Primario 200' },
  { color: '#7B80B0', label: 'Primario 300' },
  { color: '#5F9428', label: 'Custom Green' },
  { color: '#587526', label: 'Green 100' },
  { color: '#759C32', label: 'Green 200' },
  { color: '#EBAC2D', label: 'Amarillo' },
  { color: '#ffffff', label: 'Blanco', hasBorder: true },
  { color: '#000000', label: 'Negro' },
  { color: 'red', label: 'Rojo' },
  { color: 'gray', label: 'Gris' },
  { color: 'yellow', label: 'Amarillo' },
  { color: 'blue', label: 'Azul' },
  { color: 'orange', label: 'Naranja' },
  { color: 'purple', label: 'Morado' },
]

const editorToolbar = [
  'undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'underline', 'alignment', '|', 'insertImage', '|', 'fontColor', 'fontBackgroundColor', '|', 'link', 'blockQuote', 'bulletedList', 'numberedList', '|', 'outdent', 'indent'
]


export const CKEditorAdvanced = ({ value, onChange, placeholder = 'Contenido', id = "wysiwyg-advanced-editor", defaultImageCategory = '', height }) => {

  const [classesEditorContainer, setClassesEditorContainer] = useState('')
  const [showImagesModal, setShowImagesModal] = useState(false)
  const pluginRef = useRef(null)


  const handleAddImageToEditor = (imageUrl) => {
    if (pluginRef.current) {
      pluginRef.current.handleAddImageToEditor(imageUrl[0].url);
      setShowImagesModal(false);
    }
  }

  return (
    <>
      <div
        className={`cke-ditor-advanced rounded ${height ? height : 'h-[38rem]'} ${classesEditorContainer} mb-10`}
      >
        <CKEditor
          editor={ClassicEditor}
          data={value}
          config={{
            licenseKey: 'GPL',
            placeholder,
            plugins: [Essentials, Heading, BlockQuote, Paragraph, Bold, Italic, Underline, Alignment, FontColor, FontBackgroundColor, Link, List, Indent, IndentBlock],
            extraPlugins: [Image, ImageToolbar, ImageStyle, ImageResize, ImageCaption, CustomImagePlugin],
            toolbar: {
              shouldNotGroupWhenFull: false,
              items: editorToolbar
            },
            heading: {
              options: [
                { model: 'paragraph', view: { name: 'p', classes: 'ck-paragraph' }, title: 'Párrafo' },
                { model: 'heading2', view: { name: 'h2', classes: 'ck-heading2' }, title: 'Encabezado 2' },
                { model: 'heading3', view: { name: 'h3', classes: 'ck-heading3' }, title: 'Encabezado 3' },
                { model: 'heading4', view: { name: 'h4', classes: 'ck-heading4' }, title: 'Encabezado 4' },
                { model: 'heading5', view: { name: 'h5', classes: 'ck-heading5' }, title: 'Encabezado 5' }
              ]
            },
            fontColor: {
              colors: customColors
            },
            fontBackgroundColor: {
              colors: customColors
            },
            image: {
              toolbar: [
                'imageStyle:alignLeft',
                'imageStyle:alignCenter',
                'imageStyle:alignRight',
                'imageStyle:side',
                '|',
                'imageTextAlternative',
                'toggleImageCaption',
              ],
              caption: true
            },
            customImagePlugin: {
              openModal: () => setShowImagesModal(true)
            }
          }}
          onReady={(editor) => {
            pluginRef.current = editor;
          }}
          onChange={(_event, editor) => {
            const data = editor.getData()
            onChange(data)
          }}
          onBlur={() => {
            setClassesEditorContainer('')
          }}
          onFocus={() => {
            setClassesEditorContainer('')
          }}
          id={id}
        />
      </div>
      <ModalContainer
        show={showImagesModal}
        onClose={() => setShowImagesModal(false)}
      >
        <ImagesModal
          values={[]}
          onChange={handleAddImageToEditor}
          imageCategory={defaultImageCategory}
          onClose={() => setShowImagesModal(false)}
        />
      </ModalContainer>
    </>
  )
}


