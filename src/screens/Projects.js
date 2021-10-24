import React, { useState, useMemo, useEffect } from 'react';
import { Card, Tooltip } from 'antd';
import { projectData } from '../data/projectData';
import Tilt from 'react-tilt';
import useViewport from '../UseViewPort';
import Pagination from '../components/Pagination';

let PageSize = 4;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoading, setImageLoading] = useState(false);

  const { width } = useViewport();
  const breakpoint = 650;

  const showImagePlaceHOlder = () => {
    setImageLoading(true);
    setTimeout(() => {
      setImageLoading(false);
    }, 1000);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projectData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projectData]);

  useEffect(() => {
    showImagePlaceHOlder();
  }, [currentPage]);

  return (
    <>
      {currentTableData.map((project, i) => (
        <Tooltip
          color="gray"
          key={i}
          placement="right"
          title={
            <div style={{ color: 'black' }}>
              <span
                style={{
                  background:
                    'linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))',
                  color: 'yellow',
                }}
                className="tool-title"
              >
                {project.name}
              </span>
              <p>{project.description}</p>
              <a
                style={{ color: 'cyan' }}
                rel="noopener noreferrer"
                target="_blank"
                href={project.url}
              >
                {project.url}
              </a>
            </div>
          }
        >
          <Tilt options={{ max: 5 }}>
            <Card
              hoverable
              style={{ width: 300, height: 400, marginBottom: 30 }}
              cover={
                !imageLoading ? (
                  <img
                    style={{
                      height: 400,
                    }}
                    src={project.thumb}
                    alt="proj"
                  />
                ) : (
                  <div class="ui placeholder">
                    <div
                      style={{
                        height: 400,
                      }}
                      class="image"
                    ></div>
                  </div>
                )
              }
            ></Card>
          </Tilt>
        </Tooltip>
      ))}

      <div style={{ marginTop: 50 }}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={projectData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Projects;
