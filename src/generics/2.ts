type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
type ComparePick = Pick<AllType, 'name' | "position" | 'color' | 'weight'>;

  function compare <T extends ComparePick, U extends ComparePick>(top: T, bottom: U): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  };