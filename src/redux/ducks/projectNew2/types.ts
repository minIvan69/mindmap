import { Edge } from "react-flow-renderer";
import { EdgesItem } from "../edges/types";
import { NodesItem } from "../nodes/types";

export type TagsItem = {
  id: number;
  mass: string;
};

// export type Filter = { namePage: string; mass: FilterItem[] };

export type ProjectItems = {
  id: number;
  sort: number;
  structure: string;
  company_id: string;
  name: string;
  qr: string;
  selected: boolean;
};

export type ProjectItemsRes = {
  id: number;
  sort: number;
  structure: string;
  company_id: string;
  name: string;
  qr: string;
};

export type ProjectState = {
  project: ProjectItemsRes[];
  edges: Edge[];
  nodes: NodesItem[];
};

export type ProjectRes = {
  count: number;
  data: ProjectItemsRes[];
  message: string;
  status: boolean;
};

export type ProjectCreateRes = {
  message: "success";
  project: ProjectItems;
  status: boolean;
};
