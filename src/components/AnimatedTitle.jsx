

const AnimatedTitle = ({title, containerClass}) => {
  return (
    <div className="mt-5 text-center text-4x1 uppercase leading-[0.8] md:text-[6rem]">
        {title.split('<br/>')}
    </div>
  )
}

export default AnimatedTitle