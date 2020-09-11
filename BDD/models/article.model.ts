export type Article = {
  name: string;
  amout: number;
  price: number;
};

type ComponentType = {
  name: string;
  amout: number;
  price: number;
};

type Component = Article & {
  type: ComponentType;
  unit: string;
};
