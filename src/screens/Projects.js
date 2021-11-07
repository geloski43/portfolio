import React, { useState, useMemo } from 'react';
import { projectData } from '../data/projectData';
import Tilt from 'react-tilt';
import useViewport from '../hooks/UseViewPort';
import Pagination from '../components/Pagination';

let PageSize = 4;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [subStrings, setSubStrings] = useState(
    projectData.map(() => {
      return { stringLength: 130 };
    })
  );

  const { width } = useViewport();
  const isMobile = width < 487;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projectData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projectData]);

  return (
    <div>
      <div className="ui centered cards">
        {currentTableData.map((project, i) => (
          <div
            key={i}
            style={{
              background:
                'linear-gradient(to right, rgb(206, 194, 136), rgb(167, 170, 157))',
            }}
            className="card"
          >
            <div className="content">
              <div className="header">{project.name}</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                }}
              >
                <Tilt options={{ max: 55 }}>
                  <img
                    style={{ height: '150px', cursor: 'grab' }}
                    alt=""
                    className="ui small image"
                    src={project.thumb}
                  />
                </Tilt>
              </div>

              {console.log('substrings', subStrings)}
              <div className="description">
                {project.description.length > 130 ? (
                  <p>
                    {`${project.description.substring(
                      0,
                      subStrings[i].stringLength
                    )}${subStrings[i].stringLength <= 130 ? `...` : ``}`}
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        let updatedLengths = subStrings.map((item, index) => {
                          if (index === i) {
                            return {
                              ...item,
                              stringLength:
                                subStrings[i].stringLength <= 130
                                  ? item.stringLength + 500
                                  : item.stringLength - 500,
                            }; //gets everything that was already in item, and updates length
                          }
                          return item; // else return unmodified item
                        });
                        setSubStrings(updatedLengths); //updates the state
                      }}
                      className="ui mini teal tag label"
                    >
                      show {subStrings[i].stringLength <= 130 ? `more` : `less`}
                    </span>
                  </p>
                ) : (
                  <p>{`${project.description}`}</p>
                )}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: '15px',
              }}
            >
              <div
                data-inverted=""
                data-tooltip={isMobile ? 'Code' : `Source code`}
                data-position="top center"
                className="extra content"
              >
                <a
                  style={{ color: 'steelblue' }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.sourceCode}
                >
                  <i className="code icon"></i>
                </a>
              </div>

              <div
                data-inverted=""
                data-tooltip={isMobile ? 'Url' : `URL`}
                data-position="top center"
                className="extra content"
              >
                <a
                  style={{ color: 'steelblue' }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.url}
                >
                  <i class="linkify icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 50, justifyContent: 'center', display: 'flex' }}>
        <Pagination
          classNameName="pagination-bar"
          currentPage={currentPage}
          totalCount={projectData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Projects;
