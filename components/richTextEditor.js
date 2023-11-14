import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Button, Toolbar } from '@mui/material';

function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleSubscriptClick = () => {
    const newEditorState = RichUtils.toggleInlineStyle(editorState, 'SUBSCRIPT');
    setEditorState(newEditorState);
  };

  const handleSuperscriptClick = () => {
    const newEditorState = RichUtils.toggleInlineStyle(editorState, 'SUPERSCRIPT');
    setEditorState(newEditorState);
  };

  // Tambahkan fungsi lain untuk format teks lainnya seperti subscript

  return (
    <div>
      <Toolbar>
        <Button onClick={handleBoldClick}>Bold</Button>
        <Button onClick={handleItalicClick}>Italic</Button>
        <Button onClick={handleSubscriptClick}>Subscript</Button>
        <Button onClick={handleSuperscriptClick}>Superscript</Button>
        {/* Tambahkan tombol untuk format teks lainnya */}
      </Toolbar>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default RichTextEditor;
