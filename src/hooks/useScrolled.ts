import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { setScrolled } from "@/store/uiSlice";

export function useScrolled(threshold = 10) {
  const dispatch = useAppDispatch();
  const isScrolled = useAppSelector((s) => s.ui.isScrolled);

  useEffect(() => {
    const handler = () =>
      dispatch(setScrolled(window.scrollY > threshold));
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [dispatch, threshold]);

  return isScrolled;
}
