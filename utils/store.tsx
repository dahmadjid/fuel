import create from 'zustand'

interface visibilityStore 
{
    pass_visible: boolean
    inverseVisibility: () => void
}
export const useVisibilityStore = create<visibilityStore>((set) => ({
    pass_visible: false,
    inverseVisibility: () => set((state) => ({ pass_visible: !state.pass_visible })),
   
  }))

