import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;