import db from '../models/index.js'
export default function BoardService() {
    const Board = db.Board
    return {
        register(req, res) {
            new Board(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('게시글 등록 실패' + err)
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})
                    console.log('게시글 등록 성공')
                }
            })

        },
        read (_req, res) {
            console.log(`######보드 리스트 엑세스######`)
            Board.find((err, boards) => {
                if (err) return res.status(400).send(err)
                res.status(200).json({ success: true, boards})
            })
        }
    }
}
