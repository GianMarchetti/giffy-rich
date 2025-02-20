import { useEffect, useRef } from "react";

export default function useTitle({ description, title }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute("content")
  );

  useEffect(
    function () {
      const previousTitle = prevTitle.current;
      if (title) {
        document.title = `${title} | Giffy Rich`;
      }

      return () => (document.title = previousTitle);
    },
    [title]
  );

  useEffect(
    function () {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      const previousDescription = prevDescription.current;

      if (description) {
        metaDescription.setAttribute("content", description);
      }

      return () => metaDescription.setAttribute("content", previousDescription);
    },
    [description]
  );
}
