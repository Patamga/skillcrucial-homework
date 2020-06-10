;<div key={item.id} className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
    <img src={item.image} alt={item.description} />
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">{item.title}</p>
      <div className="text-gray-900 font-bold text-xl mb-2">
        {item.description}
      </div>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <p className="text-gray-900 leading-none"><Price priseDefault={item.price} /></p>
        <p className="text-gray-600"><BasketAdd id={item.id} price={item.price} /></p>
      </div>
    </div>
  </div>
</div>