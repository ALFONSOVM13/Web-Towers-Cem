'use client'
import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { ClassicEditor, Essentials, FontColor, FontBackgroundColor, BlockQuote, Paragraph, Bold, Italic, Underline, Link, List, } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import './CKEditorClassic.scss';


const editorToolbar = [
    'undo', 'redo', '|', 'bold', 'italic', 'underline', '|', 'fontColor', 'fontBackgroundColor', '|', 'link', 'blockQuote', 'bulletedList', 'numberedList'
]

export const CKEditorClassic = ({ value, onChanche, placeholder='Contenido', id="wysiwyg-editor", height }) => {

    const [classesEditorContainer, setClassesEditorContainer] = useState('')

    return (
        <div 
            className={ `rounded ${ height ? height :'h-44' } ${ classesEditorContainer }` }
        >
            <CKEditor
                editor={ ClassicEditor }
                data={ value }
                config={{
                    licenseKey:'GPL',
                    placeholder,
                    plugins: [Essentials, BlockQuote, Paragraph, Bold, Italic, Underline, FontColor, FontBackgroundColor, Link, List ],
                    toolbar: {
                        shouldNotGroupWhenFull: false,
                        items: editorToolbar
                    },
                }}
                onChange={(_event, editor) => {
                    const data = editor.getData()
                    onChanche(data)
                }}
                onBlur={() => {
                    setClassesEditorContainer('')
                }}
                onFocus={() => {
                    setClassesEditorContainer('')
                }}
                id={ id }
            />
        </div>
    )
}
