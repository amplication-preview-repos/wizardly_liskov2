import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
