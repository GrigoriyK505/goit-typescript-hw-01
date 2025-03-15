type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
type ComparePick1 = Pick<AllType, 'name' | 'color'>;
type ComparePick2 = Pick<AllType, 'position' | 'weight'>;

  function compare <T extends ComparePick1, U extends ComparePick2>(top: T, bottom: U): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  };