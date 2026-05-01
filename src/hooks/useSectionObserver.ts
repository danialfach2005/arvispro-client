import { useEffect, useRef } from "react";
import { useAppDispatch } from "./useRedux";
import { setActiveSection } from "@/store/uiSlice";

export function useSectionObserver(sectionIds: string[]) {
  const dispatch = useAppDispatch();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id));
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sectionIds, dispatch]);
}
