export interface LanguageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
    ],
};
// 返回一个回调函数
export default (state = defaultState, action) => {
    return state;
};
