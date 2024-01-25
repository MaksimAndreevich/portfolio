import { PieValueType } from "@mui/x-charts/models/seriesType";
import { ICodewarsLanguages } from "../../lib/stores/interfaces/mainStore.interface";

export function getLanguagesData(languages: ICodewarsLanguages): Array<PieValueType> | null {
  const data = [];

  for (let lang in languages) {
    const item = {
      value: languages[lang].score,
      label: lang,
    };

    data.push(item);
  }

  if (!data.length) return null;

  return data.map((l, i) => ({ id: i, ...l }));
}
