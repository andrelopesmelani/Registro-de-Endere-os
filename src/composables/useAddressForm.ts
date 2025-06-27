import { ref } from 'vue'
import type { Address } from '@/types/types'
import { useAddressStore } from '@/stores/address'

export function useAddressForm() {
  const isDialogOpen = ref(false)
  const addressStore = useAddressStore()
  const addresses = computed(() => addressStore.addresses)

  const form = ref<Address>({
    id: 0,
    title: '',
    zip_code: '',
    street: '',
    complement: '',
    neighborhood: '',
    locality: '',
    state: '',
    createdAt: null,
    updatedAt: null,
  })

  function openDialog() {
    form.value = {
      id: 0,
      title: '',
      zip_code: '',
      street: '',
      complement: '',
      neighborhood: '',
      locality: '',
      state: '',
      createdAt: null,
      updatedAt: null,
    }
    isDialogOpen.value = true
  }

  function save(address: Address) {
    const now = new Date().toISOString()

    const updatedAddress: Address = {
      ...address,
      id:
        address.id === 0
          ? addresses.value.length
            ? Math.max(...addresses.value.map((e) => e.id)) + 1
            : 1
          : address.id,
      createdAt: address.id === 0 ? now : address.createdAt,
      updatedAt: address.id === 0 ? null : now,
    }

    addressStore.saveAddress(updatedAddress)
    isDialogOpen.value = false
  }

  function edit(address: Address) {
    form.value = { ...address }
    isDialogOpen.value = true
  }

  function remove(address: Address) {
    addressStore.removeAddress(address.id)
  }

  return {
    isDialogOpen,
    form,
    addresses,
    openDialog,
    save,
    edit,
    remove,
  }
}
