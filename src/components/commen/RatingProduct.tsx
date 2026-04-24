type Ratings = {
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
};

type Props = {
  ratings: Ratings;
};

export default function Rating({ ratings }: Props) {
  const data = {
    1: ratings[1] || 0,
    2: ratings[2] || 0,
    3: ratings[3] || 0,
    4: ratings[4] || 0,
    5: ratings[5] || 0,
  };

  const total =
    data[1] + data[2] + data[3] + data[4] + data[5];

  const getPercent = (count: number) => {
    if (total === 0) return 0;
    return (count / total) * 100;
  };

  return (
    <div>
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="flex gap-2 items-center">
          <span>{star} star</span>

          <div className="w-40 h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-yellow-400 rounded"
              style={{
                width: `${getPercent(data[star as 1 | 2 | 3 | 4 | 5])}%`,
              }}
            />
          </div>

          <span>{data[star as 1 | 2 | 3 | 4 | 5]}</span>
        </div>
      ))}
    </div>
  );
}