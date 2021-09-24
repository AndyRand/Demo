import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "src";

export const ImageTitle = (record: TImage) => {
  return record.src;
};
