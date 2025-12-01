function Parent() {
  return (
    <div>
      <h1>მშობელი კომპონენტი</h1>

      <Child
        name="გიორგი"
        age={25}
        country="საქართველო"
        job="დეველოპერი"
        status="აქტიური"
      />
    </div>
  );
}

export default Parent;
