import React from 'react'
import './../../../../../style/admin/dataAD.css';
import ReactQuill from 'react-quill';

const TextEditor = (props) => {
    return (
        <div className="TextEditor">
            <ReactQuill value={props.text}
                onChange={(e)=>props.handleState('text', e)}
                className='textEditor'
                modules={TextEditor.toolbar}
                placeholder='Start writing...'
                theme={'snow'}
            />

            <div className='text_show'>
                <div className='text_show_title fCG'>{props.title}</div>
                <div className='ql-editor ' dangerouslySetInnerHTML={{ __html: props.text }}></div>
            </div>
        </div>
    );
}

TextEditor.toolbar = {
    toolbar: [
        [{ 'font': [] }],
        [],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [],
        ['bold', 'italic', 'underline'],
        [{ 'align': [] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['blockquote', 'code-block'],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        ['link', 'image', 'video'],
        [],
        ['clean']
    ]
}

export default TextEditor