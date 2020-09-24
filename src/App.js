import React, {useRef} from 'react';
import {render} from 'react-dom';
import EmailEditor from 'react-email-editor';

const App = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    let templateJson = '{"counters":{"u_column":"4","u_row":"2","u_content_text":"4","u_content_button":"1"},"body":{"rows":[{"cells":["1"],"columns":[{"contents":[{"type":"text","values":{"containerPadding":"10px","_meta":{"htmlID":"u_content_text_3","htmlClassNames":"u_content_text"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true","color":"#000000","textAlign":"left","lineHeight":"140%","linkStyle":{"inherit":"true","linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":"true","linkHoverUnderline":"true"},"hideDesktop":"false","hideMobile":"false","text":"<span style=\\"font-size: 14px; line-height: 19.6px;\\">This is a new Text block. Change the text.<\\/span>"}}],"values":{"backgroundColor":"","padding":"0px","_meta":{"htmlID":"u_column_1","htmlClassNames":"u_column"}}}],"values":{"displayCondition":"","columns":"false","backgroundColor":"","columnsBackgroundColor":"","backgroundImage":{"url":"","fullWidth":"true","repeat":"false","center":"true","cover":"false"},"padding":"0px","hideDesktop":"false","hideMobile":"false","noStackMobile":"false","_meta":{"htmlID":"u_row_1","htmlClassNames":"u_row"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true"}},{"cells":["1","1","1"],"columns":[{"contents":[{"type":"text","values":{"containerPadding":"10px","_meta":{"htmlID":"u_content_text_4","htmlClassNames":"u_content_text"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true","color":"#000000","textAlign":"left","lineHeight":"140%","linkStyle":{"inherit":"true","linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":"true","linkHoverUnderline":"true"},"hideDesktop":"false","hideMobile":"false","text":"<span style=\\"font-size: 14px; line-height: 19.6px;\\">This is a new Text block. Change the text.<\\/span>"}}],"values":{"backgroundColor":"","padding":"0px","_meta":{"htmlID":"u_column_2","htmlClassNames":"u_column"}}},{"contents":[{"type":"text","values":{"containerPadding":"10px","_meta":{"htmlID":"u_content_text_2","htmlClassNames":"u_content_text"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true","color":"#000000","textAlign":"left","lineHeight":"140%","linkStyle":{"inherit":"true","linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":"true","linkHoverUnderline":"true"},"hideDesktop":"false","hideMobile":"false","text":"<span style=\\"font-size: 14px; line-height: 19.6px;\\">This is a new Text block. Change the text.<\\/span>"}},{"type":"button","values":{"containerPadding":"10px","_meta":{"htmlID":"u_content_button_1","htmlClassNames":"u_content_button"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true","href":{"name":"web","values":{"href":"","target":"_blank"}},"buttonColors":{"color":"#FFFFFF","backgroundColor":"#3AAEE0","hoverColor":"#FFFFFF","hoverBackgroundColor":"#3AAEE0"},"size":{"autoWidth":"true","width":"100%"},"textAlign":"center","lineHeight":"120%","borderRadius":"4px","padding":"10px 20px","hideDesktop":"false","hideMobile":"false","text":"<span style=\\"font-size: 14px; line-height: 16.8px;\\">Button Text<\\/span>"}}],"values":{"backgroundColor":"","padding":"0px","_meta":{"htmlID":"u_column_3","htmlClassNames":"u_column"}}},{"contents":[{"type":"text","values":{"containerPadding":"10px","_meta":{"htmlID":"u_content_text_1","htmlClassNames":"u_content_text"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true","color":"#000000","textAlign":"left","lineHeight":"140%","linkStyle":{"inherit":"true","linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":"true","linkHoverUnderline":"true"},"hideDesktop":"false","hideMobile":"false","text":"<span style=\\"font-size: 14px; line-height: 19.6px;\\">This is a new Text block. Change the text.<\\/span>"}}],"values":{"backgroundColor":"","padding":"0px","_meta":{"htmlID":"u_column_4","htmlClassNames":"u_column"}}}],"values":{"displayCondition":"","columns":"false","backgroundColor":"","columnsBackgroundColor":"","backgroundImage":{"url":"","fullWidth":"true","repeat":"false","center":"true","cover":"false"},"padding":"0px","hideDesktop":"false","hideMobile":"false","noStackMobile":"false","_meta":{"htmlID":"u_row_2","htmlClassNames":"u_row"},"selectable":"true","draggable":"true","duplicatable":"true","deletable":"true"}}],"values":{"backgroundColor":"#e7e7e7","backgroundImage":{"url":"","fullWidth":"true","repeat":"false","center":"true","cover":"false"},"contentWidth":"500px","fontFamily":{"label":"Arial","value":"arial,helvetica,sans-serif"},"linkStyle":{"body":"true","linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":"true","linkHoverUnderline":"true"},"_meta":{"htmlID":"u_body","htmlClassNames":"u_body"}}},"schemaVersion":"5"}';
    templateJson = JSON.parse(templateJson);
    emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
      />
    </div>
  );
}

export default App;
