import { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { sql } from "@codemirror/lang-sql";
import "./QueryEditor.css";

const QueryEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      doc: "",
      extensions: [basicSetup, sql(), EditorView.lineWrapping],
      parent: editorRef.current,
    });

    return () => view.destroy();
  }, []);

  return <div ref={editorRef} className="editor-container"></div>;
};

export default QueryEditor;
