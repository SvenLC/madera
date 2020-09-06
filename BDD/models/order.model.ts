import { Provider } from "./provider.model";
import { Article } from "./article.model";

type Order = {
  provider: Provider;
  article: Article;
  amount: number;
  price: number;
  orderedAt: Date;
  receiptAt: Date;
  comment: string;
  status: Status;
};

type Status = {
  name: string;
};
