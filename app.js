
const mo = new MutationObserver(onMutation);
mo.observe(document, {
        subtree: true,
        childList: true,
    });

function onMutation() {
    const [wrap] = document.getElementsByClassName("table-wrap");
    let hasScore = false

    if (wrap && wrap.hasAttribute("data-v-2f22da39") && wrap.hasAttribute("data-v-e9e39a72") && countCounters() === 0) {
        mo.disconnect();

        setTimeout(function () {
            const [wrap] = document.getElementsByClassName("table-wrap");
            const anotherWrap = wrap.children.item(0)
            let total = 0;

            for (const elem of anotherWrap.children) {
                if (elem.tagName !== "DIV") continue
                // console.log(elem.tagName)
                let score = elem
                    .getElementsByClassName("kim-table")
                    .item(0)
                    .children.item(1)
                    .firstChild.textContent
                total += parseInt(score)
            }
            const totalScore = document.createElement("p")
            totalScore.innerText = `Всего баллов: ${total}`
            hasScore = true
            anotherWrap.prepend(totalScore)
            mo.observe(document, {
                subtree: true,
                childList: true,
            });
        }, 300)


    }
}

function countCounters() {
    const [w1] = document.getElementsByClassName("table-wrap");
    if (w1.hasAttribute("data-v-2f22da39") && w1.hasAttribute("data-v-e9e39a72")) {
        let k = 0
        const w2 = w1.firstChild
        for (const c of w2.children) {
            if (c.tagName === "P") k += 1
        }
        return k - 1
    }
    return 0
}