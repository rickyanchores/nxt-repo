// components/Card.js


const Card = () => {
  return (
    <div className="Card py-4 bg-zinc-800 shadow rounded-lg">
      <div className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Nxt Mix</p>
        <small className="text-default-500">Sample 01</small>
        <h4 className="font-bold text-large">Frontend Card</h4>
      </div>
      <div className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1531317994335-9222558fa07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHxibGFjayUyMGRhcmslMjBtYXRlcmlhbHxlbnwwfHx8fDE3MTg3ODczOTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
          width={370}
          height={150} // Ensure to add a height for the image to maintain the aspect ratio
        />
      </div>
    </div>
  );
};

export default Card;
