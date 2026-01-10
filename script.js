// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

// divider 복사
document.querySelectorAll(".text-gsap-box-top,.text-gsap-box-bottom").forEach((track) => {
  let copy = 3;

  let original = track.innerHTML;
  for (let i = 0; i < copy; i++) {
    track.innerHTML += original;
  }
});

// divider gsap

let topTween, bottomTween;

function dividerMarquee() {
  const top = document.querySelector(".text-gsap-box-top");
  const bottom = document.querySelector(".text-gsap-box-bottom");
  if (!top || !bottom) return;

  if (topTween) topTween.kill();
  if (bottomTween) bottomTween.kill();

  const distTop = top.scrollWidth - window.innerWidth;
  const distBottom = bottom.scrollWidth - window.innerWidth;

  topTween = gsap.to(top, {
    x: -distTop,
    ease: "none",
    scrollTrigger: {
      trigger: ".divider",
      scrub: true,
      invalidateOnRefresh: true,
      end: `+=${distTop}`,
    },
  });

  bottomTween = gsap.fromTo(
    bottom,
    { x: -distBottom },
    {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".divider",
        scrub: true,
        invalidateOnRefresh: true,
        end: `+=${distBottom}`,
      },
    }
  );

  ScrollTrigger.refresh();
}

dividerMarquee();
window.addEventListener("resize", dividerMarquee);
