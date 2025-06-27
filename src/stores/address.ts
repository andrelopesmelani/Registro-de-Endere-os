import type { Address } from "@/types/types";
import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", {
  state: () => ({
    addresses: [] as Address[],
  }),
  actions: {
    saveAddress(address: Address) {
      const index = this.addresses.findIndex((a) => a.id === address.id);
      if (index >= 0) {
        this.addresses[index] = { ...address };
      } else {
        this.addresses.push({ ...address });
      }
      this.addresses.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    },
    removeAddress(id: number) {
      this.addresses = this.addresses.filter((address) => address.id !== id);
    },
  },
  persist: true,
});
